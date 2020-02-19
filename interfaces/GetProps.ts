// @ts-ignore
import { NextContext } from "next";
import React from "react";

export interface GetProps<P = {}> extends React.FC<P> {
  getInitialProps?: (context: any) => Promise<P>;
}