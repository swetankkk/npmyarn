import React from 'react';
import Box from '@material-ui/core/Box';
import { Input } from '@material-ui/core';

const CommandPanel = (props) => {
    return (
            <div>
      <Box  display="flex" color="#000000"
    bgcolor="#575a5e" p={1} minHeight="40vh" marginTop="10vh" border="solid" borderColor="white" borderRadius={16}>
          {props.Heading}
                <Input autoFocus={props.autoFocus} value={props.value} onChange={props.updateConverted} placeholder={props.placeholder} disableUnderline fullWidth="true" multiline="true"/>
      </Box>
    </div>

    )
}
export default CommandPanel;