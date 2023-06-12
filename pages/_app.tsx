import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraBaseProvider } from "@chakra-ui/react";
import theme from "@/theme";
import Head from "next/head";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  const title = process.env.PROJECT_TITLE;

  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ChakraBaseProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraBaseProvider>
    </QueryClientProvider>
  );
}
