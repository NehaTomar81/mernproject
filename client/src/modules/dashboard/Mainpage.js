import React from 'react'
// import Mymaindata from './Mymaindata';
import CustomTable from './CustomTable';
function Mainpage() {
  return (
    <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-12'>
                    <CustomTable></CustomTable>
                    {/* <Mymaindata></Mymaindata> */}

                </div>
            </div>



        </div>
  )
}

export default Mainpage
