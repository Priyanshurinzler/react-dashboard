import React from 'react';
import { GridComponent, ColumnDirective, ColumnsDirective, Page, Search, Toolbar, Inject } from '@syncfusion/ej2-react-grids'

import { employeesData, employeesGrid } from '../data/dummy'
import { Header } from '../components'
import {useStateContext} from '../contexts/ContextProvider'


const Employees = () => {

  const { currentColor } = useStateContext();

  return (
    <div style={{backgroundColor:currentColor}} className='m-2 md:m-10 p-2 md:p-10 bg-slate-400 rounded-3xl'>
      <Header category="Page" title="Employees" /> 

      <GridComponent 
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={['Search']}
        width="auto"
        >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Search, Toolbar]} />
      </GridComponent>
    </div>
  )
}

export default Employees
