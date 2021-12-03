import { Grid } from "@mui/material";
import React, { FC, useEffect, useState } from "react";

import { useAppSelector } from "../../../app/hooks";
import { selectChat } from "../../chat/chatSlice";
import MessageItem from "../../molecules/MessageItem/MessageItem";

const MessageList: FC = (): JSX.Element => {
    let chatInit = useAppSelector(selectChat);
    let [chat, setChat] = useState(chatInit);
    
    useEffect(() => {
        let interval = setInterval(() => setChat(chatInit), 1000);
        return () => { clearInterval(interval) };
    }, [chatInit])

    return (
        <Grid
            container
            wrap={"nowrap"}
            direction={"column"}
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{
                width: "100%",
                height: "calc(100vh - 320px)",
                overflowY: "auto",
                bgcolor: "background.paper"
            }}
        >
            {chat.map((value, index) => {
                return <MessageItem key={index} name={value.sender} message={value.message} date={value.date} />
            })}
        </Grid>
    );
}

export default MessageList;