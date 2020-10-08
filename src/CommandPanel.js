import React from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import { Input } from '@material-ui/core';

const CommandPanel = () => {
    return (
            <div>
      <Box  display="flex" color="#000000"
    bgcolor="#575a5e" p={1} minHeight="40vh" marginTop="10vh" border="solid" borderColor="white" borderRadius={16}>
          {"NPM"}
                <Input autoFocus="True" placeholder	="Enter your npm command" disableUnderline fullWidth="true" multiline="true"/>
      </Box>
    </div>

    )
}
export default CommandPanel;