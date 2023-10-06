import React from "react";
import { BottomTab } from "../../ui";

const BottomTabs = () => {
  return (
    <footer className="bg-gradient-to-b from-white to-[#E5F1FB] shadow-[0_-10px_25px_-5px_rgba(0,0,0,0.1)] p-6 rounded-t-3xl flex justify-between items-center">
      <BottomTab>
        <svg
          width="26"
          height="24"
          viewBox="0 0 26 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.1708 22.559V15.3539H15.8229V22.559C15.8229 23.3515 16.4588 24 17.236 24H21.4751C22.2522 24 22.8881 23.3515 22.8881 22.559V12.4719H25.2902C25.9402 12.4719 26.2511 11.6506 25.7565 11.2183L13.9436 0.367457C13.4066 -0.122486 12.5871 -0.122486 12.0501 0.367457L0.23718 11.2183C-0.243251 11.6506 0.0534859 12.4719 0.703481 12.4719H3.10564V22.559C3.10564 23.3515 3.7415 24 4.51867 24H8.75776C9.53493 24 10.1708 23.3515 10.1708 22.559Z"
            fill="#4835D4"
          />
        </svg>
        <p className="text-[#4835D4]">ראשי</p>
      </BottomTab>
      <BottomTab>
        <svg
          width="21"
          height="17"
          viewBox="0 0 21 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 14.2955C0 15.0127 0.276562 15.7007 0.768845 16.2079C1.26113 16.7151 1.92881 17 2.625 17H18.375C19.0712 17 19.7389 16.7151 20.2312 16.2079C20.7234 15.7007 21 15.0127 21 14.2955V6.85795H0V14.2955ZM3.09375 10.625C3.09375 10.2407 3.24191 9.87221 3.50563 9.6005C3.76935 9.32878 4.12704 9.17614 4.5 9.17614H6.75C7.12296 9.17614 7.48065 9.32878 7.74437 9.6005C8.00809 9.87221 8.15625 10.2407 8.15625 10.625V11.5909C8.15625 11.9752 8.00809 12.3437 7.74437 12.6154C7.48065 12.8871 7.12296 13.0398 6.75 13.0398H4.5C4.12704 13.0398 3.76935 12.8871 3.50563 12.6154C3.24191 12.3437 3.09375 11.9752 3.09375 11.5909V10.625ZM18.375 0H2.625C1.92881 0 1.26113 0.284943 0.768845 0.792143C0.276562 1.29934 0 1.98726 0 2.70455V3.96023H21V2.70455C21 1.98726 20.7234 1.29934 20.2312 0.792143C19.7389 0.284943 19.0712 0 18.375 0Z"
            fill="#1E1E2E"
            fillOpacity="0.5"
          />
        </svg>
        <p>מפות</p>
      </BottomTab>
      <BottomTab>
        <svg
          width="19"
          height="14"
          viewBox="0 0 19 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.5409 8.0371C18.8349 7.76205 19 7.38922 19 7.00049C19 6.61176 18.8349 6.23893 18.5409 5.96388L12.6219 0.429781C12.3274 0.154597 11.928 -3.13227e-07 11.5115 -3.27331e-07C11.0951 -3.41434e-07 10.6957 0.154597 10.4012 0.429781C10.1067 0.704965 9.94129 1.07819 9.94129 1.46736C9.94129 1.85653 10.1067 2.22976 10.4012 2.50495L13.6412 5.5336L1.56976 5.53359C1.15343 5.53359 0.754158 5.68814 0.459772 5.96324C0.165384 6.23833 -2.88995e-07 6.61144 -3.06001e-07 7.00049C-3.23007e-07 7.38953 0.165384 7.76264 0.459772 8.03774C0.754158 8.31284 1.15343 8.46738 1.56976 8.46738L13.6412 8.46738L10.4012 11.4951C10.2554 11.6313 10.1397 11.7931 10.0608 11.9711C9.98191 12.1491 9.94129 12.3399 9.94129 12.5326C9.94129 12.7253 9.98191 12.9161 10.0608 13.0942C10.1397 13.2722 10.2554 13.434 10.4012 13.5702C10.547 13.7065 10.7201 13.8146 10.9106 13.8883C11.1011 13.962 11.3053 14 11.5115 14C11.7178 14 11.9219 13.962 12.1125 13.8883C12.303 13.8146 12.4761 13.7065 12.6219 13.5702L18.5409 8.0371Z"
            fill="#1E1E2E"
            fillOpacity="0.5"
          />
        </svg>
        <p>תרגומים</p>
      </BottomTab>
      <BottomTab>
        <svg
          width="22"
          height="20"
          viewBox="0 0 22 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.14286 2.79921H18.8571C19.0407 2.79912 19.2241 2.81098 19.4062 2.83471C19.3444 2.39358 19.1956 1.96974 18.9687 1.58875C18.7418 1.20776 18.4414 0.877512 18.0857 0.617915C17.73 0.358317 17.3264 0.174748 16.8992 0.0782755C16.472 -0.018197 16.03 -0.0255748 15.5999 0.0565868L2.67634 2.30319H2.66161C1.85039 2.46115 1.129 2.92848 0.644777 3.60975C1.37431 3.08139 2.2476 2.79804 3.14286 2.79921ZM18.8571 3.99927H3.14286C2.3096 4.00019 1.51073 4.33765 0.921526 4.93759C0.332323 5.53753 0.000909884 6.35097 0 7.19941V16.7999C0.000909884 17.6483 0.332323 18.4617 0.921526 19.0617C1.51073 19.6616 2.3096 19.9991 3.14286 20H18.8571C19.6904 19.9991 20.4893 19.6616 21.0785 19.0617C21.6677 18.4617 21.9991 17.6483 22 16.7999V7.19941C21.9991 6.35097 21.6677 5.53753 21.0785 4.93759C20.4893 4.33765 19.6904 4.00019 18.8571 3.99927ZM16.5246 13.5997C16.2138 13.5997 15.9099 13.5059 15.6515 13.33C15.3931 13.1542 15.1917 12.9043 15.0727 12.612C14.9538 12.3196 14.9227 11.9979 14.9833 11.6875C15.044 11.3771 15.1936 11.092 15.4134 10.8682C15.6332 10.6444 15.9132 10.492 16.218 10.4303C16.5228 10.3686 16.8388 10.4003 17.1259 10.5214C17.4131 10.6425 17.6585 10.8475 17.8311 11.1107C18.0038 11.3738 18.096 11.6832 18.096 11.9996C18.096 12.424 17.9304 12.831 17.6357 13.1311C17.341 13.4311 16.9413 13.5997 16.5246 13.5997Z"
            fill="#1E1E2E"
            fillOpacity="0.5"
          />
        </svg>
        <p>גיוס כספים</p>
      </BottomTab>
    </footer>
  );
};

export default BottomTabs;
