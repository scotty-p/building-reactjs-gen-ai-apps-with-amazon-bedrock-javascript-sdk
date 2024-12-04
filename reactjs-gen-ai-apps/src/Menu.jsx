import * as React from "react";
import TopNavigation from "@cloudscape-design/components/top-navigation";
import { useNavigate } from "react-router-dom";



const Menu = ({ signOut, groups, ...user }) => {
  let navigate = useNavigate()

  const menuFollow = (e) => {
    console.log("Menu Follow:", e)
    e.preventDefault();
    if (e.detail?.href) {
      navigate(e.detail.href)
    }
  }


  const itemClick = (e) => {
    console.log("Logout:", e)
    console.log("User:", user)
    e.preventDefault();
    if (e.detail.id == "signout") signOut()
  }

  return (
    <TopNavigation

      identity={{
        onFollow: (() => { navigate("/") }),
        title: <div className='title'>Consultation Information Chatbot</div>,

      }}
      utilities={[
        {
          type: "menu-dropdown",
          text: "You",
          onItemClick: ((e) => { itemClick(e) }),
          iconName: "user-profile",
          items: [
            { id: "email", text: user.signInDetails?.loginId },
            {
              id: "signout", text: "Sign Out"
            }
          ]

        }

      ]}
      i18nStrings={{
        searchIconAriaLabel: "Search",
        searchDismissIconAriaLabel: "Close search",
        overflowMenuTriggerText: "More",
        overflowMenuTitleText: "All",
        overflowMenuBackIconAriaLabel: "Back",
        overflowMenuDismissIconAriaLabel: "Close menu"
      }}
    />

  );
}


export default Menu