import React, { FunctionComponent, useState } from "react";
import styled from "styled-components/native";
import TreeItem from "@/Components/item/TreeItem";

import { View } from "react-native";
import { Farm, useGetFarmListQuery } from "@/Services";

const ItemContainer = styled.ScrollView`
  height: 110%;
  width: 100%;
  margin-top: 2px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

export const ScheList: FunctionComponent = () => {
  const farmList = useGetFarmListQuery();
  return (
    <ItemContainer>
      {farmList && farmList.isSuccess ? (
        farmList?.currentData?.map((item: Farm, index: number) => (
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

