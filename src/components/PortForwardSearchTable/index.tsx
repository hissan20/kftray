// components/PortForwardSearchTable/index.tsx
import React from 'react'

import {
  Box,
  Flex,
  IconButton,
  Switch,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from '@chakra-ui/react'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Status } from '../../types'
import PortForwardRow from '../PortForwardRow'

interface PortForwardSearchTableProps {
  configs: Status[]
  handleEditConfig: (id: number) => void
  handleDeleteConfig: (id: number) => void
  confirmDeleteConfig: () => void
  updateConfigRunningState: (id: number, isRunning: boolean) => void
  isAlertOpen: boolean
  setIsAlertOpen: (isOpen: boolean) => void
}

const PortForwardSearchTable: React.FC<PortForwardSearchTableProps> = ({
  configs,
  handleEditConfig,
  handleDeleteConfig,
  confirmDeleteConfig,
  updateConfigRunningState,
  isAlertOpen,
  setIsAlertOpen,
}) => {
  const textColor = useColorModeValue('gray.400', 'gray.400')
  const boxShadow = useColorModeValue('base', 'md')
  const fontFamily = '\'Inter\', sans-serif'

  return (
    <Box overflowY='auto' width='100%'>
      <Table variant='simple' size='sm' style={{ tableLayout: 'fixed' }} mt='5'>
        <Thead>
          <Tr boxShadow={boxShadow} fontSize='10px'>
            <Th
              fontFamily={fontFamily}
              fontSize='10px'
              width='20%'
              color={textColor}
            >
              Ctx
            </Th>
            <Th
              fontFamily={fontFamily}
              fontSize='10px'
              width='20%'
              color={textColor}
            >
              Svc
            </Th>
            <Th
              fontFamily={fontFamily}
              fontSize='10px'
              width='20%'
              color={textColor}
            >
              NS
            </Th>
            <Th
              fontFamily={fontFamily}
              fontSize='10px'
              width='20%'
              color={textColor}
            >
              Port
            </Th>
            <Th
              fontFamily={fontFamily}
              fontSize='10px'
              width='20%'
              color={textColor}
            >
              Status
            </Th>
            <Th
              fontFamily={fontFamily}
              fontSize='10px'
              width='20%'
              color={textColor}
              textAlign='center'
            >
              Edit
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {configs.length > 0 ? (
            configs.map(config => (
              <PortForwardRow
                key={config.id}
                config={config}
                confirmDeleteConfig={confirmDeleteConfig}
                handleDeleteConfig={handleDeleteConfig}
                handleEditConfig={handleEditConfig}
                isAlertOpen={isAlertOpen}
                setIsAlertOpen={setIsAlertOpen}
                updateConfigRunningState={updateConfigRunningState}
                showContext={true}
              />
            ))
          ) : (
            <Tr>
              <Td colSpan={6} style={{ textAlign: 'center' }}>
                No Configurations Found
              </Td>
            </Tr>
          )}
        </Tbody>
      </Table>
    </Box>
  )
}

export default PortForwardSearchTable
