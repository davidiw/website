initSidebarItems({"fn":[["allowing_script_hashes",""],["default_config",""],["encode_block_prologue_script",""],["encode_create_account_script","Encode a program creating a fresh account at `account_address` with `initial_balance` coins transferred from the sender's account balance. Fails if there is already an account at `account_address` or if the sender's balance is lower than `initial_balance`."],["encode_mint_script","Encode a program creating `amount` coins for sender"],["encode_rotate_consensus_pubkey_script","Encode a program that rotates the sender's consensus public key to `new_key`."],["encode_transfer_script","Encode a program transferring `amount` coins from `sender` to `recipient`. Fails if there is no account at the recipient address or if the sender's balance is lower than `amount`."],["encode_transfer_script_with_padding","Encode a program transferring `amount` coins from `sender` to `recipient` but padd the output bytecode with unreachable instructions."],["get_transaction_name","Returns a user friendly mnemonic for the transaction type if the transaction is for a known, white listed, transaction."],["rotate_authentication_key_script","Encode a program that rotates the sender's authentication key to `new_key`."]]});