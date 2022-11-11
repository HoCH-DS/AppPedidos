import React from "react";
import { ScrollView } from "react-native";
import { Appbar, Button, Card, Paragraph } from "react-native-paper";
import styled from "styled-components";


const ViewContainer = styled.SafeAreaView`

flex: 1; 

`

const ProductCard = styled(Card)`
    margin: 8px
`

export default function ProductsView(props) {

    return (

        <ViewContainer>
            <Appbar.Header>
                <Appbar.Content title={'Produtos'} />
            </Appbar.Header>
            <ProductCard>
                <ScrollView>
                    <Card>
                        <Card.Cover source={{ uri: 'https://classic.exame.com/wp-content/uploads/2020/05/Vinil-Burger.jpg?quality=70&strip=info&w=1024' }} />
                        <Card.Title
                            title={'Hamburger'}
                            right={(props) => <Button>Selecionar</Button>}
                        />
                        <Card.Content>
                            <Paragraph>R$ 12,00</Paragraph>
                        </Card.Content>
                    </Card>

                    <Card>
                        <Card.Cover source={{ uri: 'https://www.conjur.com.br/img/b/pizza.jpeg' }} />
                        <Card.Title
                            title={'Pizza'}
                            right={(props) => <Button>Selecionar</Button>}
                        />
                        <Card.Content>
                            <Paragraph>R$ 32,00</Paragraph>
                        </Card.Content>
                    </Card>

                    <Card>
                        <Card.Cover source={{ uri: 'https://taysushi.chefware.com.br/53/1599/0/batata-frita-porcao.jpg' }} />
                        <Card.Title
                            title={'Porção de Batata'}
                            right={(props) => <Button>Selecionar</Button>}
                        />
                        <Card.Content>
                            <Paragraph>R$ 12,00</Paragraph>
                        </Card.Content>
                    </Card>
                </ScrollView>
            </ProductCard>
        </ViewContainer>

    )

}