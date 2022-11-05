import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


function TestReact03() {

    return (
        <div>
        <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
        >
            <Tab eventKey="home" title="Home">
                <h3>hi</h3>
            </Tab>
            <Tab eventKey="profile" title="Profile" >
                <h3>oh...hi</h3>
            </Tab>
            <Tab eventKey="contact" title="Contact" >
                <h3>oh hello...</h3>
            </Tab>
        </Tabs>
        </div>
    );
    }

export default TestReact03;

