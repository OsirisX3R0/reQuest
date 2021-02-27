import React from "react";
import ReQuestProvider from "./ReQuestProvider";

import UseReQuestDefaultProps from "./UseReQuestDefaultProps";

export default interface ReQuestProps extends React.PropsWithChildren<ReQuestProvider> {
    children: React.ReactNode,
    url: string,
    fetchOpts: RequestInit,
    opts: UseReQuestDefaultProps
}