import React from "react";

import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user } = useAuth0();
  return (
    <div>
      <div className="row align-items-center profile-header">
        <div className="col-md-2 mb-3">
          
        </div>
        <div className="col-md text-center text-md-left">
          <h2>hello</h2>
          <p className="lead text-muted"></p>
        </div>
      </div>
      <div className="row">
        <pre className="col-12 text-light bg-dark p-4">
          
        </pre>
      </div>
    </div>
  );
};

export default Profile;