import React, { useCallback } from 'react';
import { Container, Button, Box, Link, Typography } from '@mui/material';
import { useSafeAppsSDK } from '@safe-global/safe-apps-react-sdk';

const SafeApp = (): React.ReactElement => {
  const { sdk, safe } = useSafeAppsSDK();

  const submitTx = useCallback(async () => {
    try {
      const { safeTxHash } = await sdk.txs.send({
        txs: [
          {
            to: safe.safeAddress,
            value: '0',
            data: '0x',
          },
        ],
      });
      console.log({ safeTxHash });
      const safeTx = await sdk.txs.getBySafeTxHash(safeTxHash);
      console.log({ safeTx });
    } catch (e) {
      console.error(e);
    }
  }, [safe, sdk]);

  return (
    <Container>
      <Box display="flex" flexDirection="column" rowGap={2} alignItems="center">
        <Box>
          <Typography variant="h3">Safe: {safe.safeAddress}</Typography>
        </Box>
        <Box>
          <Button variant="contained" color="primary" onClick={submitTx}>
            Click to send a test transaction
          </Button>
        </Box>
        <Box>
          <Link href="https://github.com/safe-global/safe-apps-sdk" target="_blank" rel="noreferrer">
            Documentation
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default SafeApp;
