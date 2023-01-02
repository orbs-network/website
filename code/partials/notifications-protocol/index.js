import React from "react";

function NotificationsProtocol({
  header,
  contribute,
  integrations,
  schema,
  apps,
}) {
  return (
    <div className="notifications page">
      {header}
      {contribute}
      {integrations}
      {schema}
      {apps}
    </div>
  );
}

export default NotificationsProtocol;
