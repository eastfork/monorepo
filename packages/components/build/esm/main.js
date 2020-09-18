import React from 'react';
export const Main = ({ text }) => React.createElement("main", null, text);
export const Card = ({ heading, text }) => (React.createElement("div", { className: "card" },
    React.createElement("div", { className: "card-heading" }, heading),
    React.createElement("div", { className: "card-body" }, text)));
//# sourceMappingURL=main.js.map