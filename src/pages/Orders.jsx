import React from 'react';
import { GridComponent, ColumnDirective, ColumnsDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids'

import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy'
import { Header } from '../components'
import {useStateContext} from '../contexts/ContextProvider'

const Orders = () => {

  const { currentColor } = useStateContext();

  return (
    <div style={{backgroundColor:currentColor}} className='m-2 md:m-10 p-2 md:p-10 bg-slate-400 rounded-3xl'>
      <Header category="Page" title="Orders" /> 

      <GridComponent 
        id='gridcomp' 
        dataSource={ordersData}
        allowPaging
        allowSorting
        >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit]} />
      </GridComponent>
    </div>
  )
}

export default Orders
