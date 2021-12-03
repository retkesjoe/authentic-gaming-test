import { ListItem, ListItemText, Typography } from "@mui/material";
import React, { FC } from "react";

import { Props } from "./MessageItem.interface";

const MessageItem: FC<Props> = (props: Props): JSX.Element => {
    return (
        <ListItem alignItems="flex-start">
            <ListItemText
            primary={
                <>
                    <Typography
                        component="div"
                        variant="body1"
                        fontSize="1.5rem"
                        color="text.primary"
                    >
                        {props.name}
                    </Typography>
                    <Typography
                        component="small"
                        fontSize=".8rem"
                        color="text.secondary"
                    >
                        {props.date}
                    </Typography>
                </>
            }
            secondary={<>{props.message}</>}
            />
        </ListItem>
    );
}

export default MessageItem;