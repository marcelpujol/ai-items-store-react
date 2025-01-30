import React, { useMemo } from "react";
import "./federated.scss";

const federatedComponentsMap = {
  "remote/StoreStatistics": () => import("remote/StoreStatistics"),
};

type FederatedProps = {
  appName: string;
  componentName: string;
  data: any;
  id: string;
};

const Federated: React.FC<FederatedProps> = ({
  appName,
  componentName,
  data,
  id,
}) => {
  const renderFederatedComponent = useMemo(() => {
    const FederatedComponent = React.lazy(
      federatedComponentsMap[`${appName}/${componentName}`]
    );

    return (
      <React.Suspense fallback="Loading...">
        <FederatedComponent {...data} />
      </React.Suspense>
    );
  }, [appName, componentName, id]);

  return <div className="federated-container">{renderFederatedComponent}</div>;
};

export default Federated;
