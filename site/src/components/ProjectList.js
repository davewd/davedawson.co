import React, { memo } from "react";
import PropTypes from "prop-types";
import Badge from "./Badge";
import data from "../data/projects.json";
import styled from "styled-components";

const StyledProjectList = styled.div`
  th,
  td {
    padding: 15px;
    text-align: left;
  }
  tr:hover {
    background-color: #f5f5f5;
  }`

const TableCell = memo((props) => {
  return <td> {props.children} </td>;
});

const TableLinksCell = memo((props) => {
  return (
    <td>
      {" "}
      {props.links.map(function (link_data) {
        return <a href={link_data.url}> {link_data.text} </a>;
      })}{" "}
    </td>
  );
});

const TableCategoriesCell = memo((props) => {
  return (
    <td>
      {" "}
      {props.categories.map(function (category) {
        return <Badge> {category} </Badge>;
      })}{" "}
    </td>
  );
});

const TableStatusCell = memo((props) => {
  return <td> {props.status} </td>;
});

const TableProjectCell = memo((props) => {
  return (
    <td>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
    </td>
  );
});

const TableRow = memo((props) => {
  return (
    <tr key={props.row_data.key}>
      {" "}
      {console.log(props)}{" "}
      <TableProjectCell
        name={props.row_data.name}
        description={props.row_data.description}
      />{" "}
      <TableCategoriesCell categories={props.row_data.categories} />{" "}
      <TableStatusCell
        status={props.row_data.status}
        progress_percentage={props.row_data.progress_percentage}
      />{" "}
      <TableLinksCell links={props.row_data.links} />{" "}
    </tr>
  );
});

TableRow.propTypes = {};

const ProjectList = memo((props) => {
  return (
    <StyledProjectList>
      <table>
        <thead>
          <tr>
            <th scope="col"> Project </th> <th scope="col"> Category </th>{" "}
            <th scope="col"> Status </th> <th scope="col"> Links </th>{" "}
          </tr>{" "}
        </thead>{" "}
        <tbody>
          {" "}
          {data.map(function (row_data) {
            return <TableRow row_data={row_data} />;
          })}{" "}
        </tbody>{" "}
      </table>{" "}
    </StyledProjectList>
  );
});

export default styled(ProjectList)`
`;
