import { Badge } from "./ui/badge";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "./ui/table";

const AppliedJobs = () => {
    return (
        <>
            <div>
                <p className=" font-bold text-2xl text-center" > Applied Jobs</p>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Date</TableHead>
                            <TableHead>Job Role</TableHead>
                            <TableHead>Company Name</TableHead>
                            <TableHead className=" text-right" >Satus</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            [1.2, 3, 4, 5].map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell>2-12-2024</TableCell>
                                    <TableCell>Full Stack Developer</TableCell>
                                    <TableCell>Aim 2 Excel</TableCell>
                                    <TableCell className=" text-right" ><Badge className=" bg-black text-white" >Selcted</Badge></TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </div>
        </>
    )
}

export default AppliedJobs;