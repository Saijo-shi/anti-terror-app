import { EuiButton, EuiSpacer, EuiTabbedContent, EuiTabbedContentTab } from "@elastic/eui"
import { FC } from "react"
import tabs from "../../constants/tabs"
import { useState } from "react"


const TabContent: FC = () => {
    const [selectedTab, setSelectedTab] = useState(tabs[1]);
    const onTabClick = (selectedTab: EuiTabbedContentTab) => {
        setSelectedTab(selectedTab);
      };
    return (
        <>
            <EuiSpacer size="m" />

            <EuiTabbedContent
              tabs={tabs}
              selectedTab={selectedTab}
              onTabClick={onTabClick}
            />
      </>
    )
}

export default TabContent
