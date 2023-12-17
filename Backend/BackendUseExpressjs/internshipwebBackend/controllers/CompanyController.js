const Company = require('../models/companymodel')

const getCompanyList = async (req,res)=>{
    try {
    const ListCompany = await Company.find({})
    console.log("display list Company")
    return res.status(200).json({ListCompany})
    } catch (error) {
        return res.status(500).json({error:error})
    }
    
}
const getCompany= async (req,res)=>{
    try{
        const {company} = req.body
        const companyData = await Company.findOne({company:company})
        if(!companyData){
            return res.status(404).json({error:"can not find company"})
        }
        else{
            console.log(companyData.company)
            return res.status(200).json({companyData})
        }
    }catch(err){
        console.log(err)
        return res.status(404).send(error)
    }
    
}

const updateCompany= async (req,res)=>{
    try {
        const {id,updateData}= req.body
        const Company = await Company.findByIdAndUpdate(id,updateData)
        console.log('update success:',Company.nameCompany)
        return res.status(200).json({updateSuccess:true})
    } catch (error) {
        return res.status(500).json({err:error})
    }
}

const DeleteCompany= ()=>{
    
}
const createListCompany = async (req,res) => {
    const data = req.body
    const arrayData = data.CompanyList
    try {
        await arrayData.map(async(CompanyData,index)=>{
            try {
                const {company} = CompanyData
                const checkExit = await Company.findOne({company:company})
                if(!checkExit){
                    const newCompany = await Company(CompanyData)
                    const companySave = await newCompany.save()
                    console.log(`create Company ${index} success`)
                }
                else{
                    console.log(`can not create Company ${index} because exit Company in db`)
                } 
            } catch (error) {
                console.log(error)
            }
        })
        return res.status(200).json({
            success:true
        })
    } catch (error) {
        return res.status(500).send("not success")
    }

}
const createCompany= async(req,res)=>{
    try {
        const data = req.body
        const {nameCompany,company} = req.body   
        const checkExit = await Company.findOne({nameCompany:nameCompany,company:company})
        if(!checkExit){
            const newCompany = await Company(data)
            const Company = await newCompany.save()
            return res.status(200).json({
                createSuccess:true
            })
        }
        else{
            return res.status(404).json({
                createSuccess:false,
                error:'Company exit in database'
            })
        } 
    } catch (error) {
        return res.status(404).send(error)
    }
    
}
module.exports = {createCompany,DeleteCompany,updateCompany,getCompanyList,getCompany,createListCompany}