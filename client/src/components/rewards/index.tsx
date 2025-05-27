import React from 'react';

type RewardsProps = {
    projectCode: string;
    reset: (projectCode: string | null) => void;
};

export const Rewards: React.FC<RewardsProps> = ({ projectCode, reset }) => {

    return (
        <div>
            <h2>Project Submitted!</h2>
            <p>
                Thank you for sending us this important information about <strong>{projectCode}</strong>! <br />
                Click <a href="https://www.apple.com/apple-music/" target="_blank" rel="noopener noreferrer">here</a> for 3 months of Apple Music free.
            </p>
            <p onClick={() => reset(null)}>Return to home page</p>
        </div>
    )
}