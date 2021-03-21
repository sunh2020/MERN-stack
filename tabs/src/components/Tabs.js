import React, { useState } from "react";

const Tabs = (props) => {
    console.log(props);

    const [selectedTab, SetSelectedTab] = useState(props.items[1]);

    return (
        <div>
            <header className="row">
            {props.items.map((item, i) => {
                let conditionalClasses = "";

                if (item === selectedTab) {
                    conditionalClasses += " bg-dark text-white ";
                }
                return (
                <h2 
                    onClick={(event) => {
                        SetSelectedTab(item);
                    }}
                    key={i} 
                    className={`py-3 px-5 mr-2 border ${conditionalClasses}`}
                >
                    {item.header}
                </h2>
            );
            })}    
            </header>
            <div className="row p-3 border mt-3">
           <p>{selectedTab.content}</p>
          </div>
        </div>
    );
    };

export default Tabs;