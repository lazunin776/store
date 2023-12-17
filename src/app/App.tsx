import React from 'react';
import Routes from "./routes/routes";
import {ConfigProvider} from "antd";

const App = () => {

    return (
        <ConfigProvider theme={{
            components: {
                Menu: {
                    collapsedWidth: 0
                },
                Tabs:{
                    colorPrimary: 'black',
                    colorPrimaryHover: 'black'
                }
            }
        }}>
            <Routes/>
        </ConfigProvider>
    );
};

export default App;