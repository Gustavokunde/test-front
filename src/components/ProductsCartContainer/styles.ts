import styled from "styled-components";
import { colors } from "../../utils/style-config";

export const Container = styled.div`
  width: 100%;
  border-radius: 3px;

  h2 {
    color: ${colors.titleColor};
    font-size: 14px;
    line-height: 17px;
    font-weight: 700;
    margin: 0;
    margin-left: 10px;
    margin-bottom: 5px;
  }
`;

export const CardsContainer = styled.div`
  padding: 12px;
  background-color: ${colors.backgroundColorLight};
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ProductContainer = styled.div`
  display: flex;
  border: 1px solid ${colors.borderColorLight};
  border-radius: 3px;
  padding: 14px 10px;
  img {
    object-fit: contain;
  }
`;

export const PriceSpecificationContainer = styled.p`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0;

  span + span {
    align-self: flex-end;
  }
`;
