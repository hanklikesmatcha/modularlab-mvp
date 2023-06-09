import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';
import { v4 as uuidv4 } from 'uuid';
import { sendEmail } from '$lib/utils/email';
import zlib from 'zlib';

export const load = (async ({
	locals: { supabase, getSession },
	params
}) => {
	const session = await getSession();

	if (!session) {
		throw redirect(303, '/');
	}

	if (!params.id) {
		throw error(404, {
			message: 'Not found'
		});
	}

	const { data: supplier } = await supabase
		.from('suppliers')
		.select('*')
		.eq('id', params.id)
		.single();

	if (supplier) {
		const { data: thumbnail } = supabase.storage
			.from('thumbnails-for-suppliers')
			.getPublicUrl(`${supplier?.id}.jpeg`);
		supplier.thumbnail = thumbnail.publicUrl.toString();
	}

	return { user: session.user, supplier: supplier };
}) satisfies PageServerLoad;

export const actions = {
	upload: async ({
		request,
		params,
		locals: { supabase, getSession }
	}) => {
		const session = await getSession();
		const rawFormData: FormData | string = await request.formData();
		const file: FormDataEntryValue | string | null =
			rawFormData.get('file');

		const { data: supplier } = await supabase
			.from('suppliers')
			.select('*')
			.eq('id', params.id)
			.single();
		if (file instanceof File && session !== null && supplier !== null) {
			const bookingId = uuidv4();
			const fileExt: string = file.name.split('.').pop() || '';
			const filePath = `${supplier?.name}/${
				session?.user.id
			}/${bookingId}.${fileExt.toLowerCase()}`;
			const notes: string = rawFormData.get('notes')?.toString() || '';
			try {
				await supabase.from('bookings').insert({
					id: bookingId,
					user_id: session?.user.id,
					supplier_id: supplier?.id,
					status: 'evaluate',
					file_url: filePath,
					notes: notes
				});
				await supabase.storage
					.from('files-for-bookings')
					.upload(filePath, file);

				const fileInArrayBuffer = await file.arrayBuffer();

				zlib.gzip(fileInArrayBuffer, async (err, compressedBuffer) => {
					if (err) throw err;
					const compressedArrayBuffer = compressedBuffer.buffer;
					const base64String = Buffer.from(compressedArrayBuffer).toString(
						'base64'
					);
					const zippedFileName = file.name + '.zip';
					const recipientEmail: string = session.user.email || '';
					if (
						typeof recipientEmail === 'string' &&
						recipientEmail.length > 0
					) {
						await sendEmail(
							recipientEmail,
							supplier.name,
							undefined,
							base64String,
							notes,
							zippedFileName
						);
					}
				});
			} catch (err) {
				console.log(err!.toString());
				throw error(500, {
					message: `Error uploading file - ${err!.toString()}`
				});
			}
		} else {
			throw error(404, {
				message: 'Error creating a booking'
			});
		}
	}
} satisfies Actions;
