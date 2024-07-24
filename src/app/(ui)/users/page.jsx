"use client";
import { useEffect } from "react";
import { useState } from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationNext,
} from "@/components/ui/pagination";

export default function usersList() {
  const [users, setUsers] = useState([]);
  async function fetchData() {
    const res = await fetch("https://dummyjson.com/users");
    const data = await res.json();
    console.log(data);
    setUsers(data.users);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col h-full">
      <header className="bg-primary text-primary-foreground py-4 px-6">
        <h1 className="text-2xl font-bold">Users</h1>
      </header>
      <main className="flex-1 p-6">
        <div className="border rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Gender</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <div className="flex items-center gap-3">
                    {/* <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>
                        
                      </AvatarFallback>
                    </Avatar> */}
                    <div>
                      {users.map((user) => (
                        <h3>{user.firstName}</h3>
                      ))}
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  {users.map((user) => (
                    <h3>{user.email}</h3>
                  ))}
                </TableCell>
                <TableCell>
                  {users.map((user) => (
                    <h3>{user.gender}</h3>
                  ))}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div className="flex justify-center mt-6">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </main>
    </div>
  );
}
