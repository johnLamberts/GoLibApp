import * as React from "react";

declare module "react" {
  // eslint-disable-next-line @typescript-eslint/ban-types, @typescript-eslint/no-unused-vars
  function forwardRef<T, P = {}>(
    render: (props: P, ref: React.Ref) => React.FunctionComponent
  ): (props: P & React.RefAttributes) => React.ReactElement | null;
}
