import React, { useState, useMemo } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import Highlighter from "react-highlight-words";
import SearchBox from "./SearchBox";
import { sortArrayByCriteria, fuzzySearch } from "../utils";

const DataTable = ({ data, headers, rowKeys, columnsTreatment, onFilter }) => {
  const [sortCriteria, setSortCriteria] = useState("");
  const [searchCriteria, setSearchCriteria] = useState("");

  let displayData = useMemo(
    () =>
      data.filter(item => {
        const searchText = Object.values(item).join("");
        return fuzzySearch(searchText, searchCriteria);
      }),
    [data, searchCriteria]
  );

  displayData = useMemo(
    () =>
      sortCriteria
        ? sortArrayByCriteria(displayData, sortCriteria)
        : displayData,
    [displayData, sortCriteria]
  );

  onFilter && onFilter(displayData);

  return (
    <Container>
      <FilterArea>
        <SearchBox value={searchCriteria} onChange={setSearchCriteria} />
      </FilterArea>
      <Total>{displayData.length} records</Total>
      <Table>
        <TableHeader>
          <tr>
            {headers.map(header => {
              const isActiveSorting = header === sortCriteria;
              return (
                <TableHeaderItem key={header} activeSorting={isActiveSorting}>
                  <ClickableHeader
                    onClick={() => setSortCriteria(header)}
                    activeSorting={isActiveSorting}
                  >
                    {header.toUpperCase()}
                    <SortIcon icon={faCaretDown} />
                  </ClickableHeader>
                </TableHeaderItem>
              );
            })}
          </tr>
        </TableHeader>
        <TableContent>
          {displayData.map(item => (
            <TableRow key={rowKeys(item)}>
              {columnsTreatment.map(columnsTreatment => {
                const { key, display, align } = columnsTreatment(item);
                return (
                  <TableCell key={key} align={align}>
                    <Highlight
                      searchWords={searchCriteria.split(" ")}
                      autoEscape={true}
                      textToHighlight={display}
                    />
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableContent>
      </Table>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

const FilterArea = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  padding-right: 20px;
`;

const Total = styled.div`
  width: 100%;
  text-align: center;
  padding: 20px;
  font-size: 20px;
  color: rgba(8, 48, 107, 0.3);
  text-transform: uppercase;
`;

const Table = styled.table``;

const TableHeader = styled.thead`
  display: block;
`;

const TableHeaderItem = styled.th`
  padding: 20px;
  width: 200px;
  background-color: ${props =>
    props.activeSorting ? "rgba(8, 48, 107, 1)" : "rgba(8, 48, 107, 0.8)"};
`;

const ClickableHeader = styled.button`
  width: 100%;
  color: ${props => (props.activeSorting ? "rgba(220, 234, 255, 1)" : "white")};
  font-weight: ${props => props.activeSorting && "bold"};
  font-family: "Questrial", sans-serif;
  font-size: 20px;
  background: transparent;
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const SortIcon = styled(FontAwesomeIcon)`
  font-size: 24px;
  margin: 0px 10px;
  padding-bottom: 2px;
`;

const TableRow = styled.tr``;

const TableContent = styled.tbody`
  display: block;
  max-height: 500px;
  overflow-y: overlay;
  color: rgba(8, 48, 107, 1);

  ${TableRow}:nth-child(2n) {
    background: rgba(8, 48, 107, 0.15);
  }

  ${TableRow}:nth-child(1n):hover,
  ${TableRow}:nth-child(2n):hover {
    background-color: rgba(8, 48, 107, 0.3);
    font-size: 22px;
    font-weight: bold;
  }
`;

const TableCell = styled.td`
  padding: 20px;
  text-align: ${props => props.align};
  width: 200px;
`;

const Highlight = styled(Highlighter)`
  mark {
    background-color: rgba(8, 48, 107, 0.75);
    color: white;
  }
`;

export default DataTable;
