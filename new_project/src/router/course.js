export  default  {
    path : "cms",
    component : () => import('../views/CourseManagementSystem/Template'),
    children : [
        {
            path : "index",
            name : "CMSIndex",
            component : () => import('../views/CourseManagementSystem/index')
        },
        {
            path : "Add",
            name : "CMSAdd",
            component : () => import('../views/CourseManagementSystem/Add')
        },
        {
            path : ":id/Edit",
            name : "CMSedit",
            component : () => import('../views/CourseManagementSystem/CMSedit')
        },




    ]
}