## Stg instance

[Staging](https://ethlas-pied.vercel.app/)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Discussion

#### Points to Note

1. Most of the components are self build without using any frameworks since the scope is very small and to prevent all the unnecessary dependencies
2. Since this project is completed within a few hours of work, the test coverage isn't there.
3. Only a single cloud function was used to save the user since the scope is mainly limited to posting code snippents and deleting them

#### Todo

1. Implement a copy button
2. Implement a Share button as nextjs is SSR
3. Implement the update functionality - But this will be used very less as this is just a paste bin for code snippets
4. Asthetic improvements including, adding a toast for error messages and adding a library to display alerts etc.
5. Use tested npm packages for the form validation rather than DIY
