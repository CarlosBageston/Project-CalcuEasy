import { Iresult } from "interface/IResult";
import { useEffect, useState } from "react";
import {v4 as uuidv4} from "uuid";

export default function useCalculate() {
    const dataLocalStorage = JSON.parse(localStorage.getItem("resposta") || "{}");

    const [ operations, setoperations ] = useState("Litros");
    const [ valueInput, setValueInput] = useState<number>(0);
    const [ resultUnitUp, setResultUnitUp ] = useState<Iresult[]>(dataLocalStorage);
    const [ resultUnitDown, setResultUnitDown ] = useState<Iresult[]>(dataLocalStorage);
    const [ unidade1, setunidade1 ] = useState("Litros");
    const [ unidade2, setunidade2 ] = useState("Onças");
    const [ unidade3, setunidade3 ] = useState("Galões");
    const [ responseUp, setResponseUp ] = useState(Number);
    const [ responseDown, setResponseDown ] = useState(Number);
    const [ error, setError] = useState("");

    useEffect(() => {
        const alterandoEstado = () => {
            if (operations === "Metros") {
                setunidade1("Metros");
                setunidade2("Milhas");
                setunidade3("Pés");
                setResultUnitUp([]);
                setResultUnitDown([]);
                setResponseUp(0);
                setResponseDown(0);
                setValueInput(0);
                setError("");
            } else if ( operations === "Quilos") {
                setunidade1("Quilos");
                setunidade2("Libras");
                setunidade3("Onças");
                setResultUnitUp([]);
                setResultUnitDown([]);
                setResponseUp(0);
                setResponseDown(0);
                setValueInput(0);
                setError("");
            } else if (operations === "Graus Celcios") {
                setunidade1("Graus Celcios");
                setunidade2("Kelvin");
                setunidade3("Fahrenheit");
                setResultUnitUp([]);
                setResultUnitDown([]);
                setResponseUp(0);
                setResponseDown(0);
                setValueInput(0);
                setError("");
            } else {
                setunidade1("Litros");
                setunidade2("Onças");
                setunidade3("Galões");
                setResultUnitUp([]);
                setResultUnitDown([]);
                setResponseUp(0);
                setResponseDown(0);
                setValueInput(0);
                setError("");
            }
        };
        alterandoEstado();
    },[operations]);

    const calcular = () => {
        if(valueInput <= 0 && operations !== "Graus Celcios" ){
            setError ("Digite um numero maior que zero");
        } else {
            setError("");
        }

        if (valueInput > 0) {
            switch (operations) {
            case "Litros":
                setResponseUp(valueInput * 33.8140227);
                setResponseDown(valueInput / 3.785);
                setResultUnitUp([...resultUnitUp, {id: uuidv4(), title: valueInput * 33.8140227}]);
                setResultUnitDown([...resultUnitDown, {id: uuidv4(), title: valueInput / 3.785}]);
                break;
            case "Metros":
                setResponseUp(valueInput / 1609);
                setResponseDown(valueInput * 3.281);
                setResultUnitUp([...resultUnitUp, {id: uuidv4(), title: valueInput / 1609}]);
                setResultUnitDown([...resultUnitDown, {id: uuidv4(), title: valueInput * 3.281}]);
                break;
            case "Quilos":
                setResponseUp(valueInput * 2.205);
                setResponseDown(valueInput *  35.274);
                setResultUnitUp([...resultUnitUp, {id: uuidv4(), title: valueInput * 2.205}]);
                setResultUnitDown([...resultUnitDown, {id: uuidv4(), title: valueInput *  35.274}]);
                break;
            } 
        }
        if (operations === "Graus Celcios"){
            switch (operations) {
            case "Graus Celcios":
                setResponseUp(valueInput + 273.15);
                setResponseDown((valueInput * 9/5) + 32);
                setResultUnitUp([...resultUnitUp, {id: uuidv4(), title: valueInput + 273.15 }]);
                setResultUnitDown([...resultUnitDown, {id: uuidv4(), title: (valueInput * 9/5) + 32}]);
                break;
            }
        }
        
    };


    useEffect(() => {
        const  Enviando  = () =>{
            localStorage.setItem("resposta",JSON.stringify(resultUnitUp));
        };
        Enviando();
    },[resultUnitUp, resultUnitDown]);

    return {
        operations,
        setoperations,
        valueInput,
        setValueInput,
        responseUp,
        setResponseUp,
        responseDown,
        setResponseDown,
        unidade1,
        setunidade1,
        unidade2,
        setunidade2,
        unidade3,
        setunidade3,
        resultUnitUp,
        setResultUnitUp,
        resultUnitDown,
        setResultUnitDown,
        error,
        calcular
    };
   
}


