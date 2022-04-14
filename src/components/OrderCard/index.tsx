import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
  Container,
  Image,
  Name,
  Description,
  StatusContainer,
  StatusLabel,
  StatusTypesProps,
} from './styles';

export type OrderProps = {
  id: string;
  pizza: string;
  image: string;
  status: StatusTypesProps;
  table_number: string;
  quantity: string;
}

type Props = TouchableOpacityProps & {
  index: number;
  data: OrderProps;
}

export function OrderCard({ index, data, ...rest }: Props) {
  return (
    <Container index={index} {...rest}>
      <Image source={{ uri: data.image }} />

      <Name>4 Queijos</Name>

      <Description>
        Mesa {data.table_number} - Qnt: {data.quantity}
      </Description>

      <StatusContainer status={data.status}>
        <StatusLabel status={data.status}>{data.status}</StatusLabel>
      </StatusContainer>
    </Container>
  )
}