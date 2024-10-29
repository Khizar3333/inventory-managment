"use client"

import { store } from "@/app/redux/store/store";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";



export default function ReduxPagesLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

    return (
        <Provider store={store}>
          <Toaster/>

              <div >{children}</div>
            </Provider>
    );
  }