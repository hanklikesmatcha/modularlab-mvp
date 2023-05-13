## Introduction

Hi all! This is a project designed to help hardware engineers find manufacturers to build their products. The project is published on GitHub, making it freely accessible to anyone who wants to use or contribute to it.

In addition to the project itself, the project also includes tools and resources to help engineers navigate the manufacturing process. This includes guides on how to prepare engineering blueprints, how to communicate effectively with manufacturers, and how to manage logistics and supply chain issues.

## Installation

1. Download the project to local

```
$ git clone git@github.com:hanklikesmatcha/modularlab-mvp.git
$ cd modularlab-mvp
```

2. Insert ENVIRONMENT_VARIABLES

```
$ touch .env
$ vim .env // edit the .env file for inserting variables
```

3. Prepare those keys for the project

```
# Created by Vercel CLI
VERCEL="1"
VERCEL_ENV="development"
TURBO_REMOTE_ONLY="true"
NX_DAEMON="false"
PUBLIC_SUPABASE_ANON_KEY=
PUBLIC_SUPABASE_URL=
PRIVATE_SENDINBLUE_API_KEY=
```

4. Install packages

```
$ npm install
```

5. Run the project

```
$ npm run dev
```

## Usage

- `/user` to see the user info
- `/bookings` to check all the submitted bookings
- `/suppliers` to see all the listed manufacturers

## Contributing

Thank you for your interest in contributing to our project! We welcome contributions of all kinds, including bug reports, feature requests, and code contributions.

### Code Style

We use [ESLint](https://eslint.org/) with [TypeScript](https://www.typescriptlang.org/) to enforce a consistent code style throughout the project. Before submitting a pull request, please make sure your code follows these guidelines:

- Run `npm run lint` to check your code against the ESLint rules. Any errors or warnings should be fixed before submitting your pull request.
- Use [Prettier](https://prettier.io/) to format your code. We recommend using an editor plugin or pre-commit hook to format your code automatically.
- Follow the [TypeScript Style Guide](https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/style-guide/) for naming conventions, indentation, and commenting practices.

### Pull Requests

To submit a pull request, please follow these guidelines:

1. Fork the repository and create a new branch for your changes.
2. Make your changes and commit them with clear commit messages.
3. Push your changes to your forked repository.
4. Submit a pull request to the `main` branch of our repository.
5. Wait for feedback from our team. We will review your changes and provide feedback as soon as possible.

Thank you for contributing to our project! If you have any questions or need help with the contribution process, please don't hesitate to reach out to us.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT) - see the [LICENSE](LICENSE) file for details.

### Third-Party Libraries

This project uses the following third-party libraries, each of which is licensed under its own license:

- [Supabase](https://supabase.com/)

- [Brevo (formerly Sendinblue)](https://www.brevo.com/)

If you plan to use this project or any of its code in your own projects, please make sure to review and comply with the terms of the MIT License and any other relevant licenses.

### Attribution

If you use this project or any of its code in your own projects, we would appreciate attribution in the form of a link back to our repository. This is not a requirement of the MIT License, but it helps us promote our work and encourages others to contribute to open-source projects.

Thank you for your cooperation and support of open-source software!
