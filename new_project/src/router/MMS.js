export  default  {
    path : "mms",
    component : () => import('../views/Membermanagementsystems/Template'),
    children : [
        {
            path : "index",
            name : "MMSIndex",
            component : () => import('../views/Membermanagementsystems/index')
        },
        {
            path : "Add",
            name : "MMSAdd",
            component : () => import('../views/Membermanagementsystems/Add')
        },
        {
            path : ":id/Edit",
            name : "MMSedit",
            component : () => import('../views/Membermanagementsystems/MMSedit')
        },




    ]
}