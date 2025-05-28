import React from "react";
import CreateJobModal from "./CreateJobModal";
import BodyJobs from "./BodyJobs";

const JobBoard = ({ jobs, isModalVisible, onCloseModal, onPublish }) => {
  return (
    <div>
      {isModalVisible && (
        <CreateJobModal
          onClose={onCloseModal}
          onPublish={onPublish}
        />
      )}
      <BodyJobs jobs={jobs} />
    </div>
  );
};

export default JobBoard;
