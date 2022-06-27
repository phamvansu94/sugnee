import React from 'react';
import { Tab, Tabs as TabsComponent, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { TabsProps } from '../../constants/propTypes';

const Tabs = ({ data }: TabsProps) => (
  <TabsComponent>
    <TabList>
      {data.map(({ heading }, index) => (
        <Tab key={index}>{heading}</Tab>
      ))}
    </TabList>
    {data.map(({ body }, index) => (
      <TabPanel key={index}>{body}</TabPanel>
    ))}
  </TabsComponent>
);

export default Tabs;
