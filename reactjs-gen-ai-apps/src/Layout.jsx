import { Outlet, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { AppLayout, SideNavigation } from '@cloudscape-design/components';

export default () => {
    const [activeHref, setActiveHref] = useState("/")
    useEffect(() => {
        setActiveHref("/")
    }, [])



    let navigate = useNavigate()



    return (
        <AppLayout key={1}
            headerSelector="#h"
            toolsHide={true}
            disableContentPaddings={false}
            navigationHide={false}
            navigation={
                <SideNavigation
                    activeHref={activeHref}

                    // header={
                    //     { href: "/", text: "Chatbots" }
                    // }
                    items={
                        [

                            {
                                type: "section", text: "Knowledge Bases using Amazon Bedrock", items: [
                                    // { type: 'link', text: `Amazon Bedrock Retrieve => LLM`, href: `/retrieve` },
                                    { type: 'link', text: `Digital Services Consultation`, href: `/retrieveandgenerate` }
                                ]
                            },
                            { type: "divider" }
                        ]
                    }
                    onFollow={event => {
                        if (!event.detail.external) {
                            event.preventDefault();
                            console.log(event.detail.href)
                            setActiveHref(event.detail.href)
                            navigate(event.detail.href)
                        }
                    }}
                />
            }
            content={<Outlet />}
        />)
}