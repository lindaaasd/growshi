/* eslint-disable react/prop-types */
import React, { useState, useRef, useCallback } from "react";
import { Grid } from "@mui/material";
//import { RenderChilies } from "../common/RenderChilies";
import useInfiniteChilies from "../../hooks/useInfiniteChilies";
import RenderChiliesPaginate from "../common/RenderChiliesPaginate";

const ChiliList = ({ filteredChilies }) => {
  const [pageNum, setPageNum] = useState(0);
  const { isLoading, isError, error, results, hasNextPage } =
    useInfiniteChilies(pageNum);

  const intObserver = useRef();
  const lastPostRef = useCallback(
    (chili) => {
      if (isLoading) return;

      if (intObserver.current) {
        intObserver.current.disconnect();
      }
      intObserver.current = new IntersectionObserver((chilies) => {
        if (chilies[0].isIntersecting && hasNextPage) {
          console.log("we are near the last chili");
          setPageNum((prev) => prev + 1);
          console.log(pageNum);
        }
      });
      if (chili) {
        intObserver.current.observe(chili);
      }
    },
    [isLoading, hasNextPage]
  );

  if (isError)
    return <p style={{ textAlign: "center" }}> Error: {error.message} </p>;

  return (
    <section>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        justifyContent="center"
      >
        {/* {filteredChilies?.map((c) => (
          <RenderChilies key={c.id} chiliId={c.id} />
        ))} */}

        {results.map((chili, i) => {
          if (results.length === i + 1) {
            return (
              <RenderChiliesPaginate
                ref={lastPostRef}
                key={chili.id}
                chili={chili}
              />
            );
          }
          return <RenderChiliesPaginate key={chili.id} chili={chili} />;
        })}
      </Grid>
    </section>
  );
};

export default ChiliList;
