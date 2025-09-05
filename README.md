This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


## Chapter 1: Setup

- `node -v`
- `npx -v`

- **Bun** : https://bun.com/
- A better javascript package manager, we can use instead of npx.

- Install Bun: curl -fsSL https://bun.sh/install | bash

- Verify:    bun -v  or bunx -v

- We can create a nextjs app by  :  `npx create-next-app@latest`
 
- We can create a next-js app with bunx also like this.

    ```(base) ➜  slack-clone bunx create-next-app@latest slack-tutorial
    ✔ Would you like to use TypeScript? … No / Yes
    ✔ Which linter would you like to use? › ESLint
    ✔ Would you like to use Tailwind CSS? … No / Yes
    ✔ Would you like your code inside a `src/` directory? … No / Yes
    ✔ Would you like to use App Router? (recommended) … No / Yes
    ✔ Would you like to use Turbopack? (recommended) … No / Yes
    ✔ Would you like to customize the import alias (`@/*` by default)? … No / Yes
    Creating a new Next.js app in /Users/bhakti/projects/slack-clone/slack-tutorial.
    Using bun.```


- Open the folder in VS code.

- Install **tailwindcss intersense**, **Simple react snippet** , **errorlense**, **color highlight**   plugin to vs code.
 
- Install **shadcn UI**, https://ui.shadcn.com/docs/installation
    - This gives us all the UI components.

- Initialize shadcn in this project. Go to the project folder. https://ui.shadcn.com/docs/installation/next


- `bunx --bun shadcn@latest init`


- Add a button component from shandcn to our project. https://ui.shadcn.com/docs/components/button

- `bunx --bun shadcn@latest add button`

- This will add the button component to our project under src/components folder. This  gives full access to modify any property of that UI component.

 Now we can import Button component and use it as below.
- In page.tsx.

    ```import { Button } from "@/components/ui/button";
    export default function Home() {
    return (
    <Button variant="destructive" >Click me</Button>
    );
    }
    ```

##  Chapter 2- Auth Screens

### Global.css: 

- Next.js scaffolds a globals.css file to keep application-wide styles in one place. It is native to nextjs not a base react thing.
- It automatically imports this file in app/layout.tsx (or pages/_app.tsx if you’re on the Pages Router).
- This ensures your base styles (Tailwind, resets, fonts, etc.) are loaded once across the whole app.
- Tailwind requires you to import its base layers (@tailwind base; @tailwind components; @tailwind utilities;).
- Next.js puts those imports inside globals.css.
- You could technically put them in any CSS file, but globals.css is the convention.
- We can put any app wide global styling here.

### React Server component vs client component:
- **Server Component (default)**
 - Runs only on the server.
 - Can fetch data directly (no API needed).
 - Smaller bundle size (not sent to the browser).
 - No React hooks (like useState, useEffect).
- **Client Component ("use client";)**
 - Runs in the browser.
 - Can use React state, hooks, event listeners (onClick, etc.).
 - Must be explicitly marked with "use client"; at the top.

#### Rendering Location
- **Server Components**
- Rendered on the server (Node.js runtime, not in the browser).
- HTML is generated and sent to the client
- Never shipped as JS to the browser (lighter bundle).


- **Client Components**
- Rendered in the browser after hydration.
- Full React code is bundled, sent to the client, and executed there.


| Feature | Server Component | Client Component |
|---------|-----------------|------------------|
| useState, useEffect, useContext | ❌ Not allowed | ✅ Allowed |
| Event handlers (onClick, onChange) | ❌ Not possible | ✅ Possible |
| Access to backend/data (DB, FS, secrets) | ✅ Yes (runs on server) | ❌ No (only via API) |
| Bundled to browser | ❌ No | ✅ Yes |
| Can include Client Components | ✅ Yes | ✅ N/A |


#### Usage Scenarios
- **Server Component (default)**

- Fetch data directly from DB or API.
- Render static or dynamic UI that doesn’t need interactivity.
- Example: Blog post page, product list, navbar.

- **Client Component ("use client";)**

- Required for interactivity (buttons, forms, animations).
- Anything that needs hooks (useState, useEffect).
- Example: Dropdown menus, chat input box, counters.


### Understanding State:

#### What is useState?
- In React, components are just functions. Functions normally forget everything once they return.
 - But UI needs memory (e.g., whether a user is logged in, a counter value, etc.).
 - 👉 useState is React’s way to give a component private memory (state) that:
 - persists across re-renders
 - triggers re-rendering when updated
 - Think of it as a field inside an object, but scoped to a function.

#### Syntax:
- `const [state, setState] = useState("initialValue");`
 - This is array destructuring in JavaScript/TypeScript.
- useState returns an array with two things:
 - The current value of the state (state)
 - A function to update it (setState)
- Similar to 
  - ```
    const stateAndSetter = useState("signIn");
    const state = stateAndSetter[0];`
    const setState = stateAndSetter[1];
    ```
 - setState() method that not only changes the value but also notifies React to re-render the UI

#### Why not just use a variable?
 - `let state = "signIn";`
 - `state = "signUp"; // ❌ Won’t work in React, `
 -  When we define a state variable using useState method, it act as a state, which persists across rendering, when that variable is updated using setState, it notifies the react to re-render the component.

### shadcn ui components:
- Add few more shadcn components: `bunx --bun shadcn@latest add card input separator`
- Add react icon: `bun add react-icons`

### Interfaces and Defining component properties and component parameters:

#### In TypeScript, an interface describes the shape of an object.
- ``` 
  interface SignInCardprops{
    setState: (state: SignInFlow) => void
    }
  ```
Here, SignInCardProps means:
  - ```
    {
    setState: function that takes (state: SignInFlow) and returns nothing
     }
     ```
#### Then Suppose my component taking this interface as a param
- ```
    export const SignInCard = ({setState} : SignInCardprops) =>{}
    ```
- means destructing, it is taking setState from the input object.
- Then where we are using this component we need to pass these param of that interface.
- ``` 
    const [state, setState] = useState<SignInFlow>("signIn");
    <SignInCard setState={setState}/>
     ```
- **If our interface has multiple parameters like**


- ```    
    interface SignInCardprops{
        setState: (state: SignInFlow) => void
        title: string	
    }
    ```
- Then when we call this interface we need to pass both setState and Size params like 

- ```
    <SignInCard title=”abc” setState={setState}/>   // Without “title” it will throw error.
    ```
- **1. Default rule**
- In TypeScript, all props in an interface are required by default.
- ```
    interface MyComponentProps {
    title: string;
    setState: (state: SignInFlow) => void;
    }
```
- If you declare your component:
- ```
    <MyComponent setState={setFlow} />   // ❌ Error: "title" is missing
    You must provide both title and setState.
    <MyComponent title=”abc” setState={setFlow} />
    ```
 **2. Making a prop optional**
- You can make a prop optional by adding ?:
- ```
    interface MyComponentProps {
    title?: string;
    setState: (state: SignInFlow) => void;
    }   
    ```
Now you can call:
- ```
    <MyComponent setState={setFlow} />   // ✅ title is optional
    ```
Inside the component, title will be of type string | undefined.

**3. Providing a default value**
- ```
    export const MyComponent = ({ title = "Default Title", setState }: MyComponentProps) => {
    return <h1>{title}</h1>;
    };
    ```
- Now:
    ```
    <MyComponent setState={setFlow} />        // ✅ title = "Default Title"
    <MyComponent title="Hello" setState={setFlow} />  // ✅ title = "Hello"
    ```




