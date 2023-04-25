import * as SibApiV3Sdk from '@sendinblue/client';
import { PRIVATE_SENDINBLUE_API_KEY } from '$env/static/private';
const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
const apiKey = apiInstance.authentications['apiKey'];
apiKey.apiKey = PRIVATE_SENDINBLUE_API_KEY;

export async function sendEmail(
	recipientEmail = 'szuhan.eng@gmail.com',
	recipientName: string,
	fileURL: string | undefined,
	content: any,
	body: string,
	fileName: string
) {
	const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

	sendSmtpEmail.subject = '客戶請求估價';
	sendSmtpEmail.htmlContent = `<html><body><h1>請估價</h1><p>${body}</p></body></html>`;
	sendSmtpEmail.sender = {
		name: 'ModularLab',
		email: 'hi@modularlab.net'
	};
	sendSmtpEmail.to = [{ email: recipientEmail, name: recipientName }];
	sendSmtpEmail.attachment = [{ content: content, name: fileName }];

	apiInstance.sendTransacEmail(sendSmtpEmail).then(
		function (data: any) {
			console.log(
				'API called successfully. Returned data: ' + JSON.stringify(data)
			);
		},
		function (err) {
			console.log(err);
		}
	);
}
