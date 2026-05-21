// importa react e o hook useState para controle de estado

import React, {useState} from 'react';

// importa os componentes nativos para a construção de interface
import{
    View,   // container de layout
    TextInput, // campo de entrada de texto
    Text,  // exibição de texto
    TouchbleOpscity,  // botão personalizado
    FlatList,  // lista de rolagem eficiente
    StyleSheet,  // estilização 
    Alert  // exibição de alertas
}from 'react-native';


// componente pricipal 
export default function HomeScreen(){
    // Estado para os campos de formualario
    const[descricao, setDescricao] = useState('');
    const[valor, setValor] = useState('');
    const[gastos, setGastos] = useState([]); // listas de gatos por isso usa o [] para criar tipo um array
    const[editandoId, setEditandoId] = useState(null); // id do item sendo editado

    // função para adicionar um novo gasto ou atualizar um existente
    const adicionarOuAtualizar = () =>{
        // validaçao campos vazios 
        if(!descricao || !valor){
            Alert.alert('Erro', 'Preencha todos os campos');
            return;
        }
    

     // validação para verificar valor numerico no campo valor
     if(isNaN(parseFloat(valor))){
        Alert.alert('Erro', 'Digite um valor numérico');
        return;
     }
     if(editandoId){
        const gastoAtualizados = gastos.map(item =>
        // atualiza gasto existente com base no Id
        item.id == editandoId ? {...item, descricao, valor: parseFloat(valor).toFixed(2)}: item);
        setGastos(gastoAtualizados); // atualiza a lista de gastos com o gasto editado
        setEditandoId(null); // limpa o estado de edição
     }else{
        // Criação de novo gasto com id único baseado no timestamp
        const novoGasto = {
            id: Date.now().toString(), // gera um id único usando o timestamp
            descricao, // descrição do gasto
            valor: parseFloat(valor).toFixed(2) // valor do gasto formatado para 2 casas decimais
        };
        setGastos([...gastos, novoGasto]); // adiciona o novo gasto à lista de gastos
        
        }
        // Limpa os campos de descrição e valor após adicionar ou atualizar um gasto
        setDescricao(''); // limpa o campo de descrição
        setValor(''); // limpa o campo de valor
      
    };
    // Função para remover um gasto da lista 
    const removerGasto = (id) =>{
        setGastos(gastos.filter(item => item.id !== id)); // filtra a lista de gastos para remover o gasto com o id especificado
        // verifica se o item removido é o mesmo que está sendo editado, se sim, limpa o estado de edição
        if(editandoId == id){
            setEditandoId(null); // limpa o estado de edição se o item removido for o mesmo que está sendo editado
            setDescricao(''); // limpa o campo de descrição
            setValor(''); // limpa o campo de valor

        }
    };

    // Funcão para preencher o fomulário com os dados do gasto selecionado para edição
    const editarGasto = (item) =>{
        setDescricao(item.descricao); // preenche o campo de descrição com a descrição do gasto selecionado
        setValor(item.valor); // preenche o campo de valor com o valor do gasto selecionado convertido para string
        setEditandoId(item.id); // define o id do gasto sendo editado   
    };
    // calculo do valor de gastos
    const totalGastos = gastos.reduce((acc, item) => acc + parseFloat(item.valor), 0) // soma os valores dos gastos para calcular o total
    .toFixed(2); // formata o total para 2 casas decimais

    // retorna os elementos visuais da interface
    return(
        <View style={style.container}>
            <Text style = {style.title}>Controle de Gastos</Text>
            
            {/* Campo de entrada para descrição do gasto */}
            <TextInput style={style.input} placeholder="Descrição de Gasto" value={descricao} onChangeText={setDescricao}/>

             {/* Campo de entrada de valor */}
            <TextInput style={style.input} keyboardType="numeric" placeholder="Valor" value={valor} onChangeText={setValor} />



        </View>
    );

}

// estilos para os componentes visuais
const style = StyleSheet.create({
    container: {

    },
    title: {


    },
    input: {

    }

});