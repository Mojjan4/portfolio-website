import React from "react";
import { BadgeCheck, BadgeAlert } from "lucide-react";
import PropTypes from 'prop-types';


const NotificationDialog = ({ message, type }) => {

    if (!message) return null;

    return (
        <div
            className={`fixed top-4 right-4 max-w-md p-4 rounded-lg shadow-lg slide-from-right bg-[#D4C5B3] text-black`}
        >
            <div className="flex items-center space-x-3">
                {type === 'success' ? (
                    <BadgeCheck className="w-6 h-6" />
                ) : (
                    <BadgeAlert className="w-6 h-6" />
                )}
                <p className="font-medium">{message}</p>
            </div>
        </div>
    )
}

NotificationDialog.propTypes = {
    message: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['success', 'error']).isRequired,
};

export default NotificationDialog;
