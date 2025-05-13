About:

Welcome to Custom Ecommerce, a modern front end ecommerce application coupled with a powerful and intuitive content management system(CMS) designed to streamline and enhance the online ecommerce store of the user's choosing. Users can create on the fly any type of store with the powerful CMS. Whether you're managing products, tracking orders, or analyzing sales data, the CMS platform provides the tools needed to run the ecommerce store with ease.

The dashboard in the CMS offers a seamless user experience, combining a sleek interface with robust functionality. Built with the latest technologies, it allows for easy customization and scalability, making it perfect for the user to manage assets and data on the front end of the web application.

Prerequisites:

    Clerk account for publishable and secret key
    Aiven account for free SQL hosting
    Cloudinary account for image hosting and API key
    Stripe account for stripe key and webhook secret

How to Start:

    Clone the Repository: Download the project from the repository to your local machine.
    Install Dependencies: Run npm install to install all necessary packages for respective cms and store folders
    Set Up Environment: Configure your environment variables, including your database connection string and any necessary API keys for cms and store folder
    Run the Application: Start with cms folder with npm run dev then store folder with npm run dev.

Tech Stacks Used:

The application is built using a modern and efficient tech stack, ensuring high performance, security, and ease of use. Here's a breakdown of the technologies implemented:

    Frontend:
        React: For building interactive and dynamic user interfaces.
        NextJS: For server-side rendering and static site generation.
        TypeScript: For type-safe JavaScript development.
        TailwindCSS: For highly customizable, utility-first CSS styling.
        Shadcn: For UI component designs that are simple yet elegant.
        React-hook-form: For effortless form handling and validation.
        React-hot-toast: For providing user feedback with customizable notifications.
        HeadlessUI/react: For building accessible, customizable UI components.
        Next-themes: For easy theme switching between light and dark modes.

    Backend:
        MySQL: As the relational database management system.
        Prisma: For a modern ORM to interact with the database.
        Planetscale: A serverless MySQL platform for managing the database.
        Zod: For schema validation to ensure data integrity.
        Zustand: For state management within the application.
        Aiven: Free alternative for SQL hosting

    Integrations:
        Stripe: For secure payment processing.
        Clerk: For user authentication and management.
        Axios: For making HTTP requests.
        Cloudinary: For optimized media management.
        Query-string: For parsing and stringifying URL query strings.

    Other Libraries:
        Date-fns: For manipulating and formatting dates.
        Lucide-react: For an extensive library of icons.
        Recharts: For creating customizable data visualizations.
