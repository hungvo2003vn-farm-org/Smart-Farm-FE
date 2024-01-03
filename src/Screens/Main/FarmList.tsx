import React, { FunctionComponent, useEffect, useState } from "react";
import styled from "styled-components/native";
import TreeItem from "@/Components/item/TreeItem";

import { View } from "react-native";
import { Farm, useGetFarmListQuery, useLazyGetFarmListQuery } from "@/Services";

const ItemContainer = styled.ScrollView`
  height: 110%;
  width: 100%;
  margin-top: 2px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

const FarmList = (props:{data: any, isSuccess: any, isFetching: any}) => {
  // const { data = [],isSuccess, isFetching } = useGetFarmListQuery();
  const {data, isSuccess, isFetching} = props;

  if(isFetching){
    return <View></View>
  }
  return (
    <ItemContainer>
      {data && isSuccess ? (
        data?.map((item: Farm, index: number) => (
            <TreeItem
                key={index}
                id={item.id}
                name={item.name || ""}
                model={item.model || ""}
            ></TreeItem>
            
        ))
      ) : (
        <View></View>
      )}
    </ItemContainer>
  );
};

export default FarmList;
