import styled from 'styled-components';
export default function Day ({item}) {
    const defaultWeek = [1, 2, 3, 4, 5, 6, 7];
    const DaysBox = () => {
        return(
            <>
            {defaultWeek.map((dia,index) => {
                
                if (dia === 1){
                    if(item.includes(1)){
                        return ( 
                            (<div key={index} className='selected'>D</div>)
                        )
                    }else{
                        return ( 
                        (<div key={index} className='normal'>D</div>)
                        )
                    }
                }
                if (dia === 2){
                    if(item.includes(2)){
                        return ( 
                            (<div key={index} className='selected'>S</div>)
                        )
                    }else{
                        return ( 
                        (<div key={index} className='normal'>S</div>)
                        )
                    }
                }
                if (dia === 3){
                    if(item.includes(3)){
                        return ( 
                            (<div key={index} className='selected'>T</div>)
                        )
                    }else{
                        return ( 
                        (<div key={index} className='normal'>T</div>)
                        )
                    }
                }
                if (dia === 4){
                    if(item.includes(4)){
                        return ( 
                            (<div key={index} className='selected'>Q</div>)
                        )
                    }else{
                        return ( 
                        (<div key={index} className='normal'>Q</div>)
                        )
                    }
                }
                if (dia === 5){
                    if(item.includes(5)){
                        return ( 
                            (<div key={index} className='selected'>Q</div>)
                        )
                    }else{
                        return ( 
                        (<div key={index} className='normal'>Q</div>)
                        )
                    }
                }
                if (dia === 6){
                    if(item.includes(6)){
                        return ( 
                            (<div key={index} className='selected'>S</div>)
                        )
                    }else{
                        return ( 
                        (<div key={index} className='normal'>S</div>)
                        )
                    }
                }
                if (dia === 7){
                    if(item.includes(7)){
                        return ( 
                            (<div key={index} className='selected'>S</div>)
                        )
                    }else{
                        return ( 
                        (<div key={index} className='normal'>S</div>)
                        )
                        }
                }
            
            })}
            </>
        )
        
    }
    return(
        <Icon>
            <DaysBox/>
        </Icon>
        
       
    )
}
const Icon = styled.div`
    display: flex;
    flex-direction: row;
    width: 254px;
    justify-content: space-between;

    .normal{
        width: 30px;
        height: 30px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #FFFFFF;
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 20px;
        color: #DBDBDB;
        
    }

    .selected{
        width: 30px;
        height: 30px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #CFCFCF;
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 20px;
        color: #FFFFFF;
    }
`
