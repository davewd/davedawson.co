import React, { memo } from 'react';
import PropTypes from 'prop-types';

const ProjectList = memo((props) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Category</th>
                        <th scope="col">Status</th>
                        <th scope="col">Link</th>
                    </tr>
                </thead>
                {/* Map json to rows.  Format Catergory / Status */}
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
});

ProjectList.propTypes = {
    
};

export default ProjectList;