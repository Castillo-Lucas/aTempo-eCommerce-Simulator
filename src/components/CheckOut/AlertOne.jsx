import React from "react";

const AlertOne = ({ formValidation, validation }) => {
  return (
    <div>
      {formValidation.includes(validation) && (
        <div>
          <p className="pl-1 pt-1 text-xs text-red-700">
            Este campo es obligatorio
          </p>
        </div>
      )}
    </div>
  );
};

export default AlertOne;
