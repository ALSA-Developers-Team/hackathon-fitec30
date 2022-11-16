**User**
ㅤ***AddUser***
ㅤㅤMethod: POST
ㅤㅤEndPoint: ${BaseApiURL}/user 
ㅤㅤBody: { userNumber, balance }
ㅤㅤㅤuserNumber: Matricula/Nomina
ㅤㅤㅤbalance: Number, Dinero actual, por default pondra 0
ㅤ***GetUsers***
ㅤㅤMethod: GET
ㅤㅤEndPoint: ${BaseApiURL}/user 
ㅤ***GetUserByNumber***
ㅤㅤMethod: GET
ㅤㅤEndPoint ${BaseApiURL}/user/:userNumber
ㅤㅤParams:
ㅤㅤㅤuserNumber: Number, Matricula/Nomina/RFID Decimal
ㅤ***GetUserById***
ㅤㅤMethod: GET
ㅤㅤEndPoint ${BaseApiURL}/user/id/:id
ㅤㅤParams:
ㅤㅤㅤid: Mongo Id 
ㅤㅤㅤ
ㅤㅤㅤ
**SpacePort**
ㅤ***AddSpacePort***
ㅤㅤMethod: POST
ㅤㅤEndPoint: ${BaseApiURL}/spaceport 
ㅤㅤBody: { name, balance, permsPrefix }
ㅤㅤㅤname: Nombre del puerto espacial
ㅤㅤㅤbalance: Number, Dinero actual, por default pondra 0
ㅤㅤㅤpermsPrefix: Prefijo para los permisos
ㅤ***GetSpacePorts***
ㅤㅤMethod: GET
ㅤㅤEndPoint: ${BaseApiURL}/SpacePort 
ㅤ***GetSpacePortById***
ㅤㅤMethod: GET
ㅤㅤEndPoint ${BaseApiURL}/SpacePort/:id
ㅤㅤParams:
ㅤㅤㅤid: Mongo Id
ㅤㅤㅤ
ㅤㅤㅤ
**EmpireOfficer**
ㅤ***AddEmpireOfficer***
ㅤㅤMethod: POST
ㅤㅤEndPoint: ${BaseApiURL}/empireofficer 
ㅤㅤBody: { userNumber, balance = 0, password }
ㅤㅤㅤuserNumber: Matricula/Nomina
ㅤㅤㅤbalance: Number, Dinero actual, por default pondra 0
ㅤㅤㅤpassword: Contraseña
ㅤ***GetEmpireOfficers***
ㅤㅤMethod: GET
ㅤㅤEndPoint: ${BaseApiURL}/empireofficer 